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

       async createAdress({_id,street,postalCode,city,country}){

           
        const profile = await customerModel.findById(_id);

        if(profile){

                const newAddress = new adressModel({
                        street,
                        postalCode,
                        city,
                        country
                    })

                    await newAddress.save();

                    profile.address.push(newAddress.id);

        
        }

        return await profile?.save()




       }

       async findCustomer({email}){

          const existingUser = await customerModel.findOne({email});

          if(existingUser){

                return existingUser;
          }



       }


}