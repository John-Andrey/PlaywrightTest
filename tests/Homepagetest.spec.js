const {test, expect} =require('@playwright/test');
//i have to pass 2 parameters, Home page and anonymous function ()
test('Home page',async (page)=>{

    await page.goto('https://demoblaze.com/');

})