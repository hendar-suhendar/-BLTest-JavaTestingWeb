package StepDefinitions;

import org.junit.runner.RunWith;   
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/resources/Features",
		glue= {"StepDefinitions"},
		monochrome = true,

	    //tags="@TC_Positif_01",TC_Positif_02,TC_Positif_03,TC_Positif_04
	    plugin = {"pretty","junit:target/JUnitReports/report.xml",
	    		           "json:target/JSONReports/report.json",
	    		           "html:target/HtmlReports"}
		
		//plugin = {"pretty","junit:target/JUnitReports/report.xml"}
		//plugin = {"pretty","json:target/JSONReports/report.json"}
		//plugin = {"pretty","html:target/HtmlReports"}
)
public class TestRunner {}
