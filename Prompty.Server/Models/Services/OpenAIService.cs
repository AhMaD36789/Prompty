using Prompty.Server.Models.Interfaces;

namespace Prompty.Server.Models.Services
{
    public class OpenAIService : IOpenAIService
    {
        private readonly string _model = "gpt-4-turbo";


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
