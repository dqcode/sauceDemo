package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.pageObject.InventoriPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class PurchaseSteps {
    private WebDriver webDriver;

    public PurchaseSteps() {
        super();
        this.webDriver = Hooks.webDriver;
    }


    //  public void clickItemBasket1() throws InterruptedException {
    //      InventoriPage inventoriPage = new InventoriPage(webDriver);
    //     inventoriPage.clickBasket1();
    //     Thread.sleep(5000);
    //   }
    @And("User sort product list by name z to a")
    public void selectProductContainer() throws InterruptedException {
        InventoriPage inventoriPage = new InventoriPage(webDriver);
        String a = "Name (Z to A)";
        inventoriPage.selectProducContainer(a);
        Thread.sleep(2000);
    }

    @And("User pick item Test.allTheThings T-Shirt Red")
    public void clickItemBasket1() throws InterruptedException {
        InventoriPage inventoriPage = new InventoriPage(webDriver);
        inventoriPage.clickBasket1();

        Thread.sleep(5000);
    }


    @And("User pick item Sauce Labs Onesie")
    public void clickItemBasket2() throws InterruptedException {
        InventoriPage inventoriPage = new InventoriPage(webDriver);
        inventoriPage.clickBasket2();
        Thread.sleep(5000);
    }

    @And("User click chart button")
    public void clickChart() throws InterruptedException {
        InventoriPage inventoriPage = new InventoriPage(webDriver);
        inventoriPage.clickChart1();
        Thread.sleep(5000);
    }
    @Then("User should on cart page")
    public void verifyCartPage() throws InterruptedException {
        InventoriPage inventoriPage = new InventoriPage(webDriver);
        Assert.assertTrue(inventoriPage.displayCartPage1());
        Assert.assertTrue(inventoriPage.displayCartPage2());
        Thread.sleep(2000);
    }

    @And("User click remove button on Test.allTheThings T-Shirt Red")
    public void clickRemove() throws InterruptedException {
        InventoriPage inventoriPage = new InventoriPage(webDriver);
        inventoriPage.clickRemove1();
        Thread.sleep(5000);
    }

    @And("User click check out on cart page")
    public void clickCheckOUt() throws InterruptedException {
        InventoriPage inventoriPage = new InventoriPage(webDriver);
        inventoriPage.clickCheckOut1();
        Thread.sleep(5000);

    }

    @When("User input \"(.*)\" as firstName and input \"(.*)\" as lastName and input \"(.*)\" as zipCode")
    public void inputAddress(String firstName, String lastName, String zipCode) {
        InventoriPage inventoriPage = new InventoriPage(webDriver);
        inventoriPage.setFirstName(firstName);
        inventoriPage.setLastName(lastName);
        inventoriPage.setPostal(zipCode);
        inventoriPage.clickContinue();
    }
    @And("System showing summary of payment")
    public void checkoutOverview() throws InterruptedException {
        InventoriPage inventoriPage = new InventoriPage(webDriver);
        Assert.assertTrue(inventoriPage.displayDescPage());
        Assert.assertTrue(inventoriPage.displayTotal());
        Thread.sleep(5000);
    }
    @And("User click finish button")
    public void clickFinish() throws InterruptedException {
        InventoriPage inventoriPage = new InventoriPage(webDriver);
        inventoriPage.clickFinish();
        Thread.sleep(2000);
    }
    @Then("System showing messages \"(.*)\"")
    public void errorText(String thankUText) throws InterruptedException {
        InventoriPage inventoriPage = new InventoriPage(webDriver);
        Assert.assertEquals(thankUText, inventoriPage.getThnkUText());
        Thread.sleep(2000);
        System.out.println(thankUText);
    }


}