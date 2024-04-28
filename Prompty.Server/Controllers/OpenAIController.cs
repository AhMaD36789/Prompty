using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Prompty.Server.Models.Interfaces;
using Prompty.Server.Models;

namespace Prompty.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OpenAIController : ControllerBase
    {
        private readonly IOpenAIService _openAIService;

        public OpenAIController(IOpenAIService openAIService)
        {
            _openAIService = openAIService;
        }

        [HttpPost("gen")]
        public async Task<IActionResult> Generate([FromBody] PromptHistory promptHistory)
        {
            if (promptHistory == null || !promptHistory.PromptHistoryItems.Any())
            {
                return BadRequest("Input list cannot be empty");
            }

            try
            {
                var response = await _openAIService.GenerateResponseAsync(promptHistory);
                return Ok(new { prompt = response });
            }
            catch (Exception e)
            {
                // Handle potential errors during API call
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost("hue")]
        public async Task<IActionResult> Hue([FromBody] Prompt prompt)
        {
            if (prompt == null)
            {
                return BadRequest("Prompt cannot be empty");
            }

            try
            {
                var response = await _openAIService.HueResponseAsync(prompt);
                return Ok(new { prompt = response });
            }
            catch (Exception e)
            {
                // Handle potential errors during API call
                return StatusCode(500, "Internal server error");
            }
        }
    }

}
