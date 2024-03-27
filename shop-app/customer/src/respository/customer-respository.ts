import mongoose from "mongoose";

import { customerModel,adressModel } from "../database/models";


//Dealing with the database operations

class CustomerRepository{
      

       async createCustomer({email,password,phone,salt}){
            
               const  customer = new customerModel({
                  email,
                  password,
                  salt,
                  phone,
                  address:[]
               });

               const customerResult = await customer.save();

               return customerResult;
       }






}