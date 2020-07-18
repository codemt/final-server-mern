exports.update = (req,res) =>{


    const db = require('../../models')
    const News = db.News
    const id = req.params.id;


    if(!req.body){

        res.status(500).send({


                messege: `Data to update cannot be Empty`
        })


    }

    News.findByIdAndUpdate(id,req.body,{ 
        
        useFindAndModify:false  
    
    
    })
    .then(data => {


        if(!data){


                res.status(404).send({


                        messege: `Cannot Update Data with ${id}`

                })


        }
        else res.send({

            messege: `Updated Successfully!`


        })

    })
    .catch(err =>{


        res.status(500).send({

            messege:
            err.messege || `Some Error Occured!`


        })


    })










}