const bcrypt=require('bcrypt');

const hashPassword=async(password)=>{
    try{
        const salt=await bcrypt.genSalt(12);   //increasing salt rounds for better security
        const hashedPassword=await bcrypt.hash(password,salt);
        return hashedPassword;
    }catch(error){
        throw error;
    }
};

const comparePassword=async(password,hashed)=>{
    return bcrypt.compare(password,hashed);
};

module.exports={
    hashPassword,
    comparePassword
};