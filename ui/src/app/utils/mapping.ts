import { Entity } from 'app/models/dt-model';
import { genSalt, hash } from 'bcryptjs';
import JSZip from 'jszip';
import { DateTime } from 'luxon';

export const mapIotDistributionByZone = (data: Array<any>, zoneId: string) => {
    const map = new Map();
    data.forEach((hourStat) => {
        const startTime = hourStat.startTime;
        const zoneStat = hourStat.stats?.filter(
            (stat) => stat.locationid === zoneId
        );
        if (zoneStat?.length) {
            map.set(startTime, zoneStat[0]);
        } else {
            map.set(startTime, null);
        }
    });
    return map;
};

export const map5MinOccupancyDataByZone = (data: Array<any>) => {
    const map = new Map();
    data.forEach((hourStat) => {
        hourStat.stats?.forEach((zoneStat) => {
            map.set(zoneStat.locationid, {
                occupancy: zoneStat?.numOfPeopleStats?.last ?? 0,
                entry: zoneStat?.entryStats?.sum ?? 0,
                exit: zoneStat?.exitStats?.sum ?? 0,
                co2: zoneStat?.co2Stats?.last ?? 0,
                humid: zoneStat?.humidStats?.last ?? 0,
                lux: zoneStat?.luxStats?.last ?? 0,
                pm25: zoneStat?.pm25Stats?.last,
                temp: zoneStat?.tempStats?.last,
                voc: zoneStat?.vocStats?.last,
            });
        });
    });
    return map;
};

export const calculatePercentage = (part: number, whole: number): number => {
    if (whole != 0) {
        return Math.round((part / whole) * 100) || 0;
    }
    return 0;
};

export const getRandomValueInRange = (min: number, max: number): number => {
    if (min > max) {
        throw new Error('The min value cannot be greater than the max value.');
    }
    return Math.round(Math.random() * (max - min) + min);
};

export const generateMotionJPEGurl = (
    username: string,
    password: string,
    baseURL: string
) => {
    return new Promise((resolve, reject) => {
        generateSalt(12)
            .then((salt: string) => {
                return genHash(password, salt);
            })
            .then((hashedPassword: string) => {
                const finalURL =
                    baseURL + '?token=' + username + '^*^' + hashedPassword;
                resolve(finalURL);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export const generateSalt = (rounds: number) => {
    return new Promise((resolve, reject) => {
        genSalt(rounds, (err, salt) => {
            if (err) {
                reject(err);
            } else {
                resolve(salt);
            }
        });
    });
};

export const genHash = (password: string, salt: string) => {
    return new Promise((resolve, reject) => {
        hash(password, salt, function (err, hash) {
            if (err) {
                reject(err);
            } else {
                resolve(hash);
            }
        });
    });
};

/**
 * @deprecated the function will be updated.
 * @param lat
 * @param lng
 * @param refLatLng
 * @param cameraId
 * @returns
 */
export const convertLatLngTo3dPoints = (
    lat: number,
    lng: number,
    refLatLng: {
        lat: number;
        lng: number;
    },
    cameraId: string
): Entity => {
    const refCoord = {
        latitude: refLatLng?.lat || 0,
        longitude: refLatLng?.lng || 0,
        scaleLat: 111320.0,
        scaleLng: 0,
    };
    refCoord.scaleLng =
        refCoord.scaleLat * Math.cos(refCoord.latitude * (Math.PI / 180));

    const offsetMap = {
        datacanter2: { x: 38, z: 4 },
        w33: { x: 38, z: -6 },
        w34: { x: 38, z: -5 },
        w35: { x: 38, z: -4 },
    };

    const offsets = offsetMap[cameraId] || { x: 0, z: 0 };

    const latOffset = lat - refCoord.latitude;
    const lngOffset = lng - refCoord.longitude;
    const xCord = -1 * (lngOffset * refCoord.scaleLng) + offsets.x;
    const zCord = -1 * (latOffset * refCoord.scaleLat) + offsets.z;
    return {
        x: xCord,
        z: zCord,
        latitude: lat,
        longitude: lng,
        ScaleLat: refCoord.scaleLat,
        ScaleLon: refCoord.scaleLng,
    };
};

export const calculateGeoQuadrilateralCenter = (
    vertices: { lat: number; lng: number }[]
): { lat: number; lng: number } => {
    const sum = vertices.reduce(
        (acc, point) => {
            acc.lat += point.lat;
            acc.lng += point.lng;
            return acc;
        },
        { lat: 0, lng: 0 }
    );

    return {
        lat: sum.lat / vertices.length,
        lng: sum.lng / vertices.length,
    };
};

export const shiftStartTimeForDistribution = () => {
    const currentBrowserTime = DateTime.now();
    const currentAsiaBangkokTime = currentBrowserTime.setZone('Asia/Bangkok');

    const isDayShift =
        currentAsiaBangkokTime.hour >= 7 && currentAsiaBangkokTime.hour < 19;

    // Adjust the start time for the night shift based on the current hour.
    const shiftStart = isDayShift
        ? currentAsiaBangkokTime.set({
              hour: 7,
              minute: 0,
              second: 0,
              millisecond: 0,
          })
        : currentAsiaBangkokTime.hour < 7
        ? currentAsiaBangkokTime
              .minus({ days: 1 })
              .set({ hour: 19, minute: 0, second: 0, millisecond: 0 })
        : currentAsiaBangkokTime.set({
              hour: 19,
              minute: 0,
              second: 0,
              millisecond: 0,
          });

    const shiftEpochStart = shiftStart.toUTC().toMillis();

    // Calculate shift end time.
    const shiftEnd = isDayShift
        ? currentAsiaBangkokTime.set({
              hour: 19,
              minute: 0,
              second: 0,
              millisecond: 0,
          })
        : currentAsiaBangkokTime.hour < 7
        ? currentAsiaBangkokTime.set({
              hour: 7,
              minute: 0,
              second: 0,
              millisecond: 0,
          })
        : currentAsiaBangkokTime
              .plus({ days: 1 })
              .set({ hour: 7, minute: 0, second: 0, millisecond: 0 });
    const shiftEpochEnd = shiftEnd.toUTC().toMillis();

    return { shiftEpochStart, shiftEpochEnd, isDayShift };
};
export const currentTimeForAggregate = () => {
    const currentBrowserTime = DateTime.now();
    // console.log("currentBrowserTime", currentBrowserTime.toFormat('yyyy-MM-dd HH:mm:ss'));
    const currentAsiaBangkokTime = currentBrowserTime.setZone('Asia/Bangkok');
    // console.log("currentAsiaBangkokTime", currentAsiaBangkokTime.toFormat('yyyy-MM-dd HH:mm:ss'));
    const isDayShift =
        currentAsiaBangkokTime.hour >= 7 && currentAsiaBangkokTime.hour < 19;
    return {
        shiftEpochStart: currentAsiaBangkokTime
            .minus({ hour: 12 })
            .toUTC()
            .toMillis(),
        shiftEpochEnd: currentAsiaBangkokTime.toUTC().toMillis(),
        isDayShift: isDayShift,
    };
};
export const convertBlobToMap = (zipBlob, callback) => {
    const fileMap = new Map();
    const zip = new JSZip();

    zip.loadAsync(zipBlob)
        .then((content) => {
            const promises = [];

            for (const relativePath in content.files) {
                const file = content.files[relativePath];
                if (!file.dir) {
                    // Store the promise for each file's blob content
                    const filePromise = file
                        .async('blob')
                        .then((fileContent) => {
                            const fileUrl = URL.createObjectURL(fileContent);
                            fileMap.set(relativePath, fileUrl);
                        });

                    promises.push(filePromise);
                }
            }

            // After all files have been processed, invoke the callback with the fileMap
            Promise.all(promises).then(() => {
                callback(fileMap);
            });
        })
        .catch((error) => {
            console.error('Error loading ZIP file:', error);
        });
};

export const getValueForRange = (fieldValue: number): number => {
    if (fieldValue >= 400) {
        return 3; // 400 - 500
    } else if (fieldValue >= 300) {
        return 6; // 300 - 400
    } else if (fieldValue >= 200) {
        return 9; // 200 - 300
    } else if (fieldValue >= 100) {
        return 12; // 100 - 200
    } else if (fieldValue >= 1) {
        return 15; // 1 - 100
    } else {
        return 0; // 0
    }
};
