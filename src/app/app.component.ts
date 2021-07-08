import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  // ******************** این سورس برای آشنایی با تایپ اسکریپت و انگولار هست. فقط بدونید متغیر و متدها ********************
  // ********************   چطور ایجاد میشن و چطور مقدار میدیم بهشون و ازشون مقدار میخونیم   ********************
  //==================================================================================================================

  // ******************** نحوه تعریف متغیر در انگولار ********************
  //==============================================================================
    // حوزه دسترسی این متغیر ها داخل همه بلاک های این صفحه هست. با کلمه
    // this.
    // قابل دسترسی هست
    properyName; // متغیرها میتونن هیچ نوعی نداشته باشن. اما بهتره نوعشون رو مشخص کنیم
    properyName2: any; // نوع انی یعنی هرچی میشه توش ریخت. مانند بالایی
    name: string; // متغیری از نوع رشته
    age: number = 20; // متغیری از نوع عدد. میتونیم همین جا مقدارهم بدیم
    isActive: boolean; // متغیری از نوه بولین
    childs: string[]; // آرایه ای از رشته ها
    ageOfChilds: number[]; // آرایه ای از اعداد

    appTitle: string;
    telegramID: string;
  //==============================================================================

  // کانستراکتور تو هر صفحه اولین متدی هست که اجرا میشه
  constructor() {
    // مقداردهی متغیرهایی که بالا تعریف کردیم به این شکل انجام میشه
    this.appTitle = "app-level1";
    this.telegramID = "AngularEscort";

    this.name = "amirhosein";
    this.isActive = true;
    this.childs = ["amir","ali","reza"];
    this.ageOfChilds = [10,20,30];
    
    // میتونیم هم یه متد بنویسیم که اون هارو مقدار بده و این جا فقط صداش بزنیم. که روش استاندارد هم همینه
    this.fillingVariables(); // داخل خودش لاگ کردیم دیگه این جا فقط صداش میزنیم
    this.fillingVariablesWithParams("amirhosein",true,["amir","ali","reza"],[10,20,30]);
    
    // اول قسمت تعریف متدهارو پایین صفحه بررسی کنید بعد نحوه فراخونیشون رو این جا ببینید
    console.log(this.showData());
    console.log(this.showData2());

    // برای تعریف متغیر داخل یک بلاک (کانستراکتور هم یک بلاک حساب میشه) باید از کلمه
    // let یا var یا const
    // استفاده کنیم
    let res = this.showData3(); // مقداری که متد ریترن میکنه رو ریختیم تو یه متغیر و اون متغیر رو لاگ گرفتیم
    console.log(res);
    const res2 = this.showData4(); // این یک متغیر ثابت هست و فقط یک بار میشه مقداردهیش کرد
    console.log(res2);

    // چون این متد دارای پارامتر بود باید پارامترهاشم مقدار بدیم موقع فراخونی
    var res3 = this.showData5("haniyeh","amiri",30);
    console.log(res3);
    
    var res4 = this.showData6();
    res4 = res4 + " ما";
    console.log(res4);

    console.log(this.showData7());
    this.showData8()

    // حالت های مختلف صدا زدن و استفاده از متد رو استفاده کردیم که فقط دستمون بیاد چه کارایی میشه کرد.
    // مثلا تو بعضی متدها مستقیم مقدار رو لاگ گرفتیم و این جا فقط صداشون زدیم
    // و تو بعضی متدها مقدار رو ریترن کردیم و این جا لاگ گرفتیم
  }

  fillingVariables() {
    this.name = "amirhosein";
    this.isActive = true;
    this.childs = ["amir","ali","reza"];
    this.ageOfChilds = [10,20,30];

    console.log("==============");
    console.log(`name: ${this.name}`);
    console.log(`isActive: ${this.isActive}`);
    console.log(`childs: ${this.childs}`);
    console.log(`ageOfChilds: ${this.ageOfChilds}`);
    console.log("==============");
  }

  // با پارامتر هم میشه
  fillingVariablesWithParams(name,isActive,names,ages) {
    this.name = name;
    this.isActive = isActive;
    this.childs = names;
    this.ageOfChilds = ages;
    console.log("==============");
    console.log(`name: ${this.name}`);
    console.log(`isActive: ${this.isActive}`);
    console.log(`childs: ${this.childs}`);
    console.log(`childAge: ${this.ageOfChilds}`);
    console.log("==============");
  }













  // ******************** نحوه تعریف متد در انگولار ********************
  //===========================================================================
      // خروجی این متد تعیین نشده. پس میتونه خروجی ای نداشته باشه. یا یه استرینگ برگردونه یا نامبر یا هرچی
      methodeName() {
        // return 10;
        // return ["one","two"];
        // ...
      }

      // این متد باید یک استرینگ برگردونه. اگه ریترن رو بردارید ارور میده میگه حتما باید یه استرینگ ریترن کنی
      showData():string {
        return "showData";
      }

      // مثل بالایی ولی باید نامبر برگردونه
      showData2():number {
        return 110;
      }

      // مثل بالایی ولی باید بولین برگردونه
      showData3():boolean {
        return true;
      }

      // مثل بالایی ولی باید آرایه ای از رشته برگردونه
      showData4():string[] {
        return ["one","two","three"];
        // return ["one"];
      }

      // میشه برا متد پارامتر تعیین کرد
      showData5(name:string,family:string,age:number):string {
        return name + " " + family + " " + age.toString() + " ساله";
        // روش پایینی برا ترکیب رشته و پراپرتی استانداردتره
        // return `${name} ${family} ${age} ساله`;
      }

      showData6():string {
        // نحوه تعریف متغیر و متد داخل بلاک مثل جاوااسکریپت هست. یعنی باید از 
        // var و let و const و function 
        // استفاده کنیم
        // حوزه دسترسی این متغیرها و متدها داخل همین بلاک هست فقط
        let country = "ایران";

        function returnCountry() {
          return country;
        }
    
        // فانکشنی که کلمه ایران رو ریترن میکنه رو ریترن میکنیم کلا. در نتیجه کلمه ایران رو برمیگردونه
        return returnCountry();

        // متونستیم اول فانکشن رو داخل متغیر بریزیم بعد متغیر رو کلا ریترن کنیم. مثل پایین
        // let result = returnCountry();
        // return result;
        // 😄 !میدونم که میدونستید. احتیاطا گفتم 
      }

      // به این متدها میگن 
      // arrow functions
      // یه روش تعریف متد جدید هست
      // در واقع متغیری به نام 
      // showData8
      // ساختیم و یک
      // arrow function
      // رو ریختیم توش. پس اون تبدیل به متد شد
      showData7 = () => {
        return "showData8 : i am arrow function";
      }

      // این هم مثل بالایی هست تقریبا. ولی اینطور جایی استفاده نمیشه.
      // فقط بدونید وقتی یه متد رو بریزیم تو یه متغیر، اون متغیر تبدیل به متد میشه
      showData8 = function() {
        console.log("showData9");
      }

//===========================================================================
}
