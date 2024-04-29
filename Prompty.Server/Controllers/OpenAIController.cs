using Microsoft.AspNetCore.Mvc;
using Forge.OpenAI.Interfaces.Services;
using Forge.OpenAI.Models.ChatCompletions;

namespace Prompty.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OpenAIController : ControllerBase
    {
        private readonly IOpenAIService _openAi;

        public OpenAIController(IOpenAIService openAi)
        {
            _openAi = openAi;
        }

        [HttpPost("gen")]
        public async Task<IEnumerable<string>> Generate([FromBody] string userInput)
        {
            var results = new List<string>();

            try
            {
                var request = new ChatCompletionRequest(ChatMessage.CreateFromUser(userInput));
                // Set request parameters if needed

                await foreach (var response in _openAi.ChatCompletionService.GetStreamAsync(request, CancellationToken.None))
                {
                    if (response.IsSuccess)
                    {
                        results.Add(response.Result?.Choices[0].Delta.Content);
                    }
                    else
                    {
                        // Handle error response differently
                        results.Add($"Error: {response.ErrorMessage}");
                    }
                }
            }
            catch (Exception ex)
            {
                results.Add($"Internal server error: {ex.Message}");
            }

            return results;
        }


        [HttpPost("hue")]
        public async Task<IActionResult> Hue(string a)
        {
            throw new NotImplementedException();
        }
    }
}
