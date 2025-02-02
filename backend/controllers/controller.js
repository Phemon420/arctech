import fetchData from "../service/service.js";

const resource={
    resource_get_all : async(req,res)=>{
        try{
            const data = await fetchData();
            //console.log(data);
            res.status(200).json(data);
        }
        catch(e){
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    }
}

export default resource;