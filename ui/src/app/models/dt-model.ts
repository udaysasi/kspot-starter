export class HEATMAP_DTO {
    Name: string;
    Entities: Array<Entity>;
}

export class Entity {
    latitude: number;
    longitude: number;
    x: number;
    z: number;
    ScaleLat: number;
    ScaleLon: number;
}
