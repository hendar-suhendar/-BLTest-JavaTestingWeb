package StepDefinitions;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.*;

public class Register {

	
		
	WebDriver driver = null;
	
	@Given("open url to bukalapak website")
	public void open_url_to_bukalapak_website() {
		try {
			
			String projectPath = System.getProperty("user.dir");
			System.out.println("Project path is:"+projectPath);
			
			System.setProperty("webdriver.chrome.driver",projectPath+"/src/test/resources/drivers/chromedriver.exe");
			
			driver = new ChromeDriver();
		    driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
			driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
			
			driver.manage().window().maximize();
			driver.navigate().to("https://www.bukalapak.com");
			
		}catch (Exception ex){
			ex.printStackTrace();
			driver.quit();   
	    }
	}

	@And("user click register button")
	public void user_click_register_button() {
		try {
			
			driver.findElement(By.linkText("Daftar")).click();
			
		}catch (Exception ex){
			ex.printStackTrace();
			driver.quit();  
	    }
	}
	
	@And("user click gmail button")
	public void user_click_gmail_button() {
		try {
			
			driver.findElement(By.xpath("/html/body/main/div/div[2]/section/div[3]/div/div/div[1]/button")).click();
			
		}catch (Exception ex){
			ex.printStackTrace();
			driver.quit();  
	    }
	}
	@And("user click facebook button")
	public void user_click_facebook_button() {
		try {
			
			driver.findElement(By.xpath("/html/body/main/div/div[2]/section/div[3]/div/div/div[1]/button")).click();
			
		}catch (Exception ex){
			ex.printStackTrace();
			driver.quit();  
	    }
	}
	
	@When("user enter phone number")
	public void user_enter_phone_number(String phone_number) {
		try {
		
			driver.findElement(By.className("bl-text-field__input")).sendKeys(phone_number);
	
		}catch (Exception ex){
			ex.printStackTrace();
			driver.quit();   
	    }
}
	@When("user enter email")
	public void user_enter_email(String email) {
		try {
		
			driver.findElement(By.className("bl-text-field__input")).sendKeys(email);
	
		}catch (Exception ex){
			ex.printStackTrace();
			driver.quit();   
	    }
}
	@When("user enter facebook email")
	public void user_enter_facebook_email(String email) {
		try {
		
			driver.findElement(By.id("email")).sendKeys(email);
	
		}catch (Exception ex){
			ex.printStackTrace();
			driver.quit();   
	    }
}
	@When("user enter facebook password")
	public void user_enter_facebook_password(String password) {
		try {
		
			driver.findElement(By.id("pass")).sendKeys(password);
	
		}catch (Exception ex){
			ex.printStackTrace();
			driver.quit();   
	    }
}

	@When("users click on login button")
	public void users_click_on_login_button() {
		try {
			
			driver.findElement(By.name("login")).sendKeys(Keys.ENTER);
	
		}catch (Exception ex){
			ex.printStackTrace();
			driver.quit();   
	    }
}	
	
	
	@When("user enter google email and click next button")
	public void user_enter_google_email_and_enter_next_button(String email) {
		try {
		
			driver.findElement(By.id("identifierId")).sendKeys(email);
			driver.findElement(By.tagName("button")).sendKeys(Keys.ENTER);
	
		}catch (Exception ex){
			ex.printStackTrace();
			driver.quit();   
	    }
}
	@When("user enter password email and click next button")
	public void user_enter_password_email(String password) {
		try {
		
			driver.findElement(By.name("password")).sendKeys(password);
			driver.findElement(By.tagName("button")).sendKeys(Keys.ENTER);
	
		}catch (Exception ex){
			ex.printStackTrace();
			driver.quit();   
	    }
}

	@When("users click on register button")
	public void users_click_on_register_button() {
		try {
			
		driver.findElement(By.xpath("/html/body/main/div/div[2]/section/div[2]/button")).sendKeys(Keys.ENTER);
		
		}catch (Exception ex){
			ex.printStackTrace();
			driver.quit();  
	    }
	}

	@When("user confirmation on SMS OTP code")
	public void user_confirmation_on_SMS_OTP_code() throws InterruptedException {
		 try {
		  
	      WebDriverWait wait = new WebDriverWait(driver,5000);
	     //wiat element popup header is displayed
	      wait.until(ExpectedConditions.presenceOfElementLocated (By.className("bl-text bl-text--subheading-3 bl-text--semi-bold")));
	      //button send otp code
	      driver.findElement(By.className("mb-8 bl-button bl-button--primary bl-button--medium bl-button--block")).sendKeys(Keys.ENTER);
	      Thread.sleep(30000);
	      //button verification otp
	      driver.findElement(By.className("bl-button bl-button--primary bl-button--medium bl-button--block")).sendKeys(Keys.ENTER);
	      
		 }catch (Exception ex){
			ex.printStackTrace();
			driver.quit();    
		}
	}
	@When("user confirmation on email OTP code")
	public void user_confirmation_on_email_OTP_code() throws InterruptedException {
		 try {
		  //wiat element popup header is displayed
	      WebDriverWait wait = new WebDriverWait(driver,5000);
	      wait.until(ExpectedConditions.presenceOfElementLocated (By.className("bl-text bl-text--subheading-3 bl-text--semi-bold")));
	      //button send otp code
	      driver.findElement(By.className("mb-8 bl-button bl-button--primary bl-button--medium bl-button--block")).sendKeys(Keys.ENTER);
	      Thread.sleep(30000);
	      //button verification otp
	      driver.findElement(By.className("bl-button bl-button--primary bl-button--medium bl-button--block")).sendKeys(Keys.ENTER);
	      
		 }catch (Exception ex){
			ex.printStackTrace();
			driver.quit();    
		}
	}
	
	@Then("user is navigated to the home screen")
	public void user_is_navigated_to_the_home_screen() {
	 try {
		 	//wiat element popup header is displayed
		     WebDriverWait wait = new WebDriverWait(driver,5000);
		     wait.until(ExpectedConditions.presenceOfElementLocated (By.className("bl-avatar__img")));
		 	 driver.findElement(By.className("bl-avatar__img")).sendKeys(Keys.ENTER);
			 boolean passed = driver.findElement(By.linkText("users")).isDisplayed();
		    
			 if (passed) {
		            System.out.println("Test Passed");
		        } else {
		            System.out.println("Test Failed");
		        }
			driver.quit();
			
		}catch (Exception ex){
			ex.printStackTrace();
			driver.quit();    
	    }
	}
	

}
