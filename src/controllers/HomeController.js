const ProdutoModel = require("../models/produtoModel");

const HomeController = {
    showIndex: (req, res) => {
        const produtos = ProdutoModel.findAll();

        if(req.session.usuario){
            return res.render("home/landingpage", {produtos, usuario: req.session.usuario});
        }

        return res.render("home/landingpage", {produtos});

    },
    trabalheConosco: (req, res) => {
        const produtos = ProdutoModel.findAll();

        if(req.session.usuario){
            return res.render("home/trabalheConosco", {produtos, usuario: req.session.usuario});
        }

        return res.render("home/trabalheConosco", {produtos});
    },
    sobre:(req, res) => {
        return res.render("home/sobre");
    },
    politica:(req, res) => {
        return res.render("home/politica");
    },
    showOneProduct: (req, res) => {
        const { id } = req.params;
        const produto = ProdutoModel.findById(id);
        if(!produto){
            return res.render("home/not-found", {error: "Produto não encontrado"});
        }

        if(req.session.usuario){
            return res.render("produtos/detalhes", {produto, usuario: req.session.usuario});
        }

        return res.render("produtos/detalhes", {produto});
    },
    ofertas:(req, res) => {
        const { id } = req.params;
        const produto = ProdutoModel.findById(id);
        if(!produto){
            return res.render("home/not-found", {error: "Produto não encontrado"});
        }

        if(req.session.usuario){
            return res.render("home/ofertas", {produto, usuario: req.session.usuario});
        }

        return res.render("home/ofertas", {produto});
    },
    promocao: (req, res) => {
        const produtos = ProdutoModel.findAll();

        if(req.session.usuario){
            return res.render("home/promocao", {produtos, usuario: req.session.usuario});
        }

        return res.render("home/promocao", {produtos});

    },

    timesdorio: (req, res) => {
        const produtos = ProdutoModel.findAll();

        if(req.session.usuario){
            return res.render("home/promocao", {produtos, usuario: req.session.usuario});
        }

        return res.render("home/promocao", {produtos});

    },
    timesdesaopaulo: (req, res) => {
        const produtos = ProdutoModel.findAll();

        if(req.session.usuario){
            return res.render("home/promocao", {produtos, usuario: req.session.usuario});
        }

        return res.render("home/promocao", {produtos});

    },
};

module.exports = HomeController;