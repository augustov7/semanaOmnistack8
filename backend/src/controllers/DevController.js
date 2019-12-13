module.exports = {
    store(req,res){

        //console.log(req.body.username);

        const { username } = req.body;

        return res.json({ok: true});
    }
};