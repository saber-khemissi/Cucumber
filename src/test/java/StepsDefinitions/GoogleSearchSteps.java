package StepsDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import java.util.concurrent.TimeUnit;

public class GoogleSearchSteps {
 
	WebDriver driver =null;
	
	@Given("browser is open")
	public void browser_is_open() {
			
		System.setProperty("webdriver.chrome.driver", "C:/Users/saber/eclipse-workspace/CucumberJavaBDD/src/test/resources/Drivers/chromedriver.exe");
        driver =new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
        driver.manage().window().maximize();
	}

	@And("users is on google search page")
	public void users_is_on_google_search_page() {
		driver.navigate().to("https://www.google.fr/");

	}

	@When("user enters a text in search results")
	public void user_enters_a_text_in_search_results() {
		driver.findElement(By.name("q")).sendKeys("JB3 Technologies");

	}

	@When("hits enter")
	public void hits_enter() {
		
		driver.findElement(By.name("q")).sendKeys(Keys.ENTER);

	}

	@Then("user is navigated to search results")
	public void user_is_navigated_to_search_results() {
		//driver.getPageSource().contains("JB3 Technologies provides IT Solutions and Services to small and medium");
		driver.findElement(By.xpath("//*[@id=\"rso\"]/div[2]/div/div[1]/a/h3")).click();
		
		String URL = driver.getCurrentUrl();
		Assert.assertEquals(URL, "https://jb3technologies.com/" );
		
		driver.quit();
		
		

	}
}


