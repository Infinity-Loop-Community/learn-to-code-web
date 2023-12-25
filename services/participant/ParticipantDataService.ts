import configuration from "@/config/configuration";
import BaseCommand from './event/BaseCommand';
import QuizOverviewResponse from "@/services/participant/response/QuizOverviewResponse";
import QuizAttemptDetailResponse from "@/services/participant/response/QuizAttemptDetailResponse";
import BackendDataService from "@/services/BackendDataService";

export class ParticipantDataService {

  constructor(private backendDataService = new BackendDataService()) {}

  async sendParticipantEvent(userId: string, baseEvent: BaseCommand, cookieValue?: string): Promise<void> {
    return await this.backendDataService.send(
        `${configuration.url.backend}/participants/${userId}/events`,
        "POST",
        JSON.stringify({
          data: baseEvent.getData(),
          createdAt: baseEvent.getCreatedAt(),
          type: baseEvent.getType(),
        }),
        cookieValue
    )
  }

  async getQuizOverview(userId: string, cookieValue?: string): Promise<QuizOverviewResponse> {
    return await this.backendDataService.send<QuizOverviewResponse>(
        `${configuration.url.backend}/participants/${userId}/quizzes`,
        "GET",
        undefined,
        cookieValue,
        false
    )
  }

  async getQuizLatestAttemptDetail(userId: string, quizId: string, cookieValue?: string): Promise<QuizAttemptDetailResponse> {
    return await this.backendDataService.send<QuizAttemptDetailResponse>(
        `${configuration.url.backend}/participants/${userId}/quizzes/${quizId}/attempts/latest`,
        "GET",
        undefined,
        cookieValue,
        false
    )
  }

}
