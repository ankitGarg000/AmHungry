export interface ITodaySpecial{
    type: string;
    price: string;
    image: string;
}

export class TodaySpecial{
    type: string;
    price: string;
    image: string;
    constructor(obj?: ITodaySpecial){
        obj.image = obj && obj.image ? obj.image : '';
        obj.price = obj && obj.price ? obj.price : '';
        obj.type = obj && obj.type ? obj.type : '';
    }
}