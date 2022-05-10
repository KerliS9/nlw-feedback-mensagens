import express from 'express';
import { SubmitFeedbackUseCase } from './useCases/submitFeedbackUseCase';
import { PrismaFeedbackRepository } from './repositories/prisma/prismaFeedbackRepository';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailerMailAdapter';


export const routes = express.Router();
// tipos de requisição
// GET - Buscar informações
// POST - Cadastrar informações
// PUT = Atualizar informações de uma entidade
// PATCH - Atualizar uma informação única de uma entidade
// DELETE - Deletar uma informação

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;
    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository, nodemailerMailAdapter);

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    });

    return res.status(201).send();
})