import urlModel from '../models/URL.js';
import {nanoid} from 'nanoid';


export async function generateShortUrl(req,res){
    try{
    const {originalURL}=req.body;
    if(!originalURL){return res.status(400).send({message:"originalURL is required"})}

    const shortID=nanoid(7)
        const dataTosave=new urlModel({originalURL,shortID})
        await dataTosave.save()
        res.status(201).send({message:"Short URL created successfully",shortUrl:`${req.protocol}://${req.get("host")}/${shortID}`} )
}catch(error){
    res.status(500).send({message:`There is some error.Please come back later`,errString:error.message})
}
}

export async function redirectToOriginalURL(req,res){
   try{
    const {shortID}=req.params;
    if(!shortID){return res.status(400).send({message:"shortID is required"})}
    const url= await urlModel.findOne({shortID:shortID})
    if(url){res.redirect(url.originalURL)}
    else{return res.status(404).send({message:"URL not found"})}
    }catch(error){
       return res.status(500).send({message:`There is some error.Please come back later`,errString:error.message})
    }
}