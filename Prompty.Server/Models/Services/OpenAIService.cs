using Azure.AI.OpenAI;
using Prompty.Server.Models.Interfaces;

namespace Prompty.Server.Models.Services
{
    public class OpenAIService : IOpenAIService
    {
        private readonly OpenAIClient _client;
        private readonly string _model = "gpt-4-turbo";

        public OpenAIService(IConfiguration configuration)
        {
            _client = new OpenAIClient(configuration["sk-proj-6vSfYd6qSm5qLBn24lKvT3BlbkFJmO758ofQmMmkgG77cFBd"]);
        }

        public async Task<string> GenerateResponseAsync(PromptHistory promptHistory)
        {
            // Implementation of the generate response logic
            return "";
        }

        public async Task<string> HueResponseAsync(Prompt prompt)
        {
            // Implementation of the hue response logic
            return "";
        }
    }

}
