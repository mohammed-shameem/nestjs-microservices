
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface IQuery {
    getUsers(): User[] | Promise<User[]>;
}

export interface User {
    id?: string;
    name?: string;
    role?: string;
    hourlyPrice?: number;
}
