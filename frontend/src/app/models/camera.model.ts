export interface Camera {
    _id: string;
    model: string;
    vendor: string;
    has_flash: boolean;
    film_id:[string];
    photo_url:string;
    createdAt:Date;
    updatedAt:Date;
}