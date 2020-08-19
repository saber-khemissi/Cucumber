package StepsDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class JenkinsLogin {
	String currentURL = null;
	WebDriver driver =null;
	
	@Given("se connecter a l'inteface Jenkins")
	public void se_connecter_a_l_inteface_Jenkins() {
		System.setProperty("webdriver.chrome.driver", "C:/Users/saber/eclipse-workspace/CucumberJavaBDD/src/test/resources/Drivers/chromedriver.exe");
       driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(60,TimeUnit.SECONDS);
        driver.manage().window().maximize();
    	driver.navigate().to("http://localhost:8080/login?from=%2F");
	
	}

	@When("un utilsateur sasie un login valide")
	public void un_utilsateur_sasie_un_login_valide() {
		driver.findElement(By.id("j_username")).sendKeys("saber");
		driver.findElement(By.name("j_password")).sendKeys("saber22061990");
	 
	}

	@And("Cliquer sur connecter")
	public void cliquer_sur_connecter() {
		driver.findElement(By.name("Submit")).click();

		

	}

	@Then("cliquer sur deconnecter")
	public void cliquer_sur_deconnecter() {
	    currentURL = driver.getCurrentUrl();

       // System.out.println(currentURL);
        Assert.assertTrue(currentURL.equals("http://localhost:8080/"));
	}

		
		
		
	}



