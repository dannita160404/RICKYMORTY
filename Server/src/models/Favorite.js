const { DataTypes, ENUM } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {

      id:{
         type:DataTypes.INTEGER,
         allowNull:false,
         primaryKey:true,
         autoIncrement:true
       },

       name:{
         type:DataTypes.STRING,
         allowNull:false,
       },

       status:{
         type: DataTypes.ENUM("Alive", "Dead" , "Unknown"),
         allowNull:false,

       },

       species:{
         type:DataTypes.STRING,
         allowNull:false,
       },

       gender:{
         allowNull:false,
         type: DataTypes.ENUM("Female", "Male" , "Genderless" , "unknown"),
       },

       origin:{
         type:DataTypes.STRING,
         allowNull:false,
       },

       image:{
         type:DataTypes.STRING,
         allowNull:false,
       }

   }, { timestamps: false });
};
