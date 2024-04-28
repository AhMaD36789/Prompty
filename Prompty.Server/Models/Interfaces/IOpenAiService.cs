namespace Prompty.Server.Models.Interfaces
{
    public interface IOpenAIService
    {
        Task<string> GenerateResponseAsync(PromptHistory promptHistory);
        Task<string> HueResponseAsync(Prompt prompt);
    }

}
