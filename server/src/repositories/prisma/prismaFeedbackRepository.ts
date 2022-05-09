import { FeedbacksRepository, FeedbackCreateData } from "../feedbacksRepository";
import { prisma } from '../../prisma';

export class PrismaFeedbackRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        })
    };
}