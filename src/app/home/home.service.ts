import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()


export class HomeService {

    constructor(private http: Http) { }
    private subject = new Subject<any>();
    private subjectId = new Subject<any>();
    private navbar = new Subject<boolean>();
    countValue: number = 0;
    noOfItems: number = 0;

    sendCount(count: any) {
        this.subject.next(count);
    }

    addCountToCart() {
        return this.subject.asObservable();
    }

    sendSubCategoryId(id: any) {
        this.subjectId.next(id);
    }

    getSubCategoryId() {
        return this.subjectId.asObservable();
    }

    ToggleNavbar(value: any){
        // debugger;
        // const phoneNumber = JSON.parse(localStorage.getItem('phoneNumber'));
        // if(phoneNumber){
        //     if(phoneNumber.number){
        //         return false;
        //     }
        // } else {
        //     return true;
        // }
        this.navbar.next(value);
    }

    getBoolean(): Observable<any>{
        return this.navbar.asObservable();
    }

    getCategories() {
        const body = JSON.stringify({});;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://54.191.54.252:8000/web/getWebCategory', body, options)
            .map((res: Response) => {
                return res.json();
            });
    }

    getSubCategories(categoryId: any) {
        const body = JSON.stringify({
            categoryId: categoryId
        });;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://54.191.54.252:8000/web/getWebSubCategory', body, options)
            .map((res: Response) => {
                console.log(res.json());
                return res.json();
            });
    }

    getSubOfSubCategories(subCategoryId: any) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('subcategoryId', subCategoryId);
        let body = { search: params }
        return this.http.get('http://54.191.54.252:8000/web/getWebProduct', body)
            .map((res: Response) => {
                console.log(res.json());
                return res.json();
            });
    }


    sendOtpToUser(number: any) {
        const body = JSON.stringify({
            phoneNo: number,
            deviceType: 'WEB'
        });;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://54.191.54.252:8000/api/users/register', body, options)
            .map((res: Response) => {
                return res.json();
            });
    }

    verifyOtp(number: any, otp: any) {
        const body = JSON.stringify({
            phoneNo: number,
            otpCode: otp
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://54.191.54.252:8000/api/users/verifyOtp', body, options)
            .map((res: Response) => {
                console.log(res.json());
                return res.json();
            });
    }

    resendOtp(number: any) {
        const body = JSON.stringify({
            phoneNo: number,
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://54.191.54.252:8000/api/users/resendOtp', body, options)
            .map((res: Response) => {
                console.log(res.json());
                return res.json();
            });
    }


    addItemToCart(id: any): Observable<any>{
        const authToken = JSON.parse(localStorage.getItem('accessToken'));
        const body = JSON.stringify({
            productId: id
        });
        let headers = new Headers({
             'Content-Type': 'application/json',
        });
        headers.append('authorization', `bearer ${authToken}`);
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://54.191.54.252:8000/api/users/addToCart', body, options)
            .map((res: Response) => {
                return res.json();
            });
    }


     removeItemFromCart(id: any): Observable<any>{
        const authToken = JSON.parse(localStorage.getItem('accessToken'));
        const body = JSON.stringify({
            productId: id
        });
        let headers = new Headers({
             'Content-Type': 'application/json',
        });
        headers.append('authorization', `bearer ${authToken}`);
        let options = new RequestOptions({ headers: headers });
        console.log(body);
        return this.http.post('http://54.191.54.252:8000/api/users/removeProduct', body, options)
            .map((res: Response) => {
                console.log(res.json());
                return res.json();
            });
    }


    getCartDetails(): Observable<any>{
        const authToken = JSON.parse(localStorage.getItem('accessToken'));
        const body = { };
        let headers = new Headers({
             'Content-Type': 'application/json',
        });
        headers.append('authorization', `bearer ${authToken}`);
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://54.191.54.252:8000/api/users/getCartDetails', body, options)
            .map((res: Response) => {
                console.log(res.json());
                return res.json();
            });
    }

    generateOrder(data): Observable<any>{
        const authToken = JSON.parse(localStorage.getItem('accessToken'));
        const body = JSON.stringify(data);
        let headers = new Headers({
             'Content-Type': 'application/json',
        });
        headers.append('authorization', `bearer ${authToken}`);
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://54.191.54.252:8000/api/users/generateOrder', body, options)
            .map((res: Response) => {
                console.log(res.json());
                return res.json();
            });
    }


     sendContact(data): Observable<any>{
        const body = JSON.stringify({
            name: data.name,
            phoneNo: data.phone,
            message: data.message
        });
        let headers = new Headers({
             'Content-Type': 'application/json',
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://54.191.54.252:8000/api/users/contact', body, options)
            .map((res: Response) => {
                console.log(res.json());
                return res.json();
            });
    }

}
