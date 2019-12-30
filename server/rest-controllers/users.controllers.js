exports.users = (req, res)=>{
    res.status(200).send({
       status:'success',
       message:'All Users',
       data:{}
    });
};

exports.user = (req, res)=>{
    
    const id = req.params.id;
    
    res.status(200).send({
       status:'success',
       message:`One User ${id}`,
       data:{}
    });
};

exports.new = (req, res)=>{
    
    const id = req.params.id;
    
    res.status(200).send({
       status:'success',
       message:'New User',
       data:{}
    });
};

exports.update = (req, res)=>{
    
    const id = req.params.id;
    
    res.status(200).send({
       status:'success',
       message:'User Updated',
       data:{}
    });
};

exports.delete = (req, res)=>{
    
    const id = req.params.id;
    
    res.status(200).send({
       status:'success',
       message:'User Deleted',
       data:{}
    });
};