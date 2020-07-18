
exports.delete = (req,res) => {


    const db = require('../../models')
    const News = db.News;
    
    const id = req.params.id;
    // delete data from mongodb
    News.findByIdAndRemove(id)
    .then(data =>{


        if(!data){


            res.status(404).send({

                messege:`Cannot Delete Data with ID {id}`

            })

        }
        else res.send({ messege: "Deleted Successfully!" })

    })
    .catch(err =>{

            res.status(500).send({


                messege:
                err.messege || `Some Error Occured`

            })

    })






}