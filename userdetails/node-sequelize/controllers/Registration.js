
const models = require('../models');
module.exports = {
    list(req, res) {
        return models.Registration
        .findAll({attributes: ['id', 'Name','Password','Email']})        
        .then((registration) => res.status(200).send(registration))
        .catch((error) => { res.status(400).send(error); });    
    },
    getById(req, res) {
        return models.Registration
        .query('SELECT * FROM Registration where id='+req.params.id )
         // .findByPk(req.params.id,{attributes: ['id', 'Name','Password','Email']})
          .then((reg) => {
            if (!reg) {
              return res.status(404).send({
                message: 'User Details Not Found',
              });
            }
            return res.status(200).send(reg);
          })
          .catch((error) => res.status(400).send(error));
      },
}