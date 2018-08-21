import { Component, OnInit } from "@angular/core";
import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";
import { Router } from '@angular/router';
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "gr-login",
    providers: [UserService],
    templateUrl: "login/login.component.html",
    styleUrls: ["login/login.component.css"]
})
export class LoginComponent implements OnInit {
    user: User;
    email = "nativescriptrocks@progress.com";
    isLoggingIn = true;

    constructor(private router: Router, private userService: UserService, private page: Page) { 
        this.user = new User();
        this.user.email = 'dans-fake-email-2@gmail.com';
        this.user.password = 'dansfakepassword';
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    // submit() {
    //   // console.log("Hello");
    //   alert("You’re using: " + this.email);
    // }

    submit() {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    login() {
        this.userService.login(this.user)
            .subscribe(
                () => this.router.navigate(["/list"]),
                (error) => alert("Unfortunately we could not find your account.")
            );
    }

    signUp() {
        // this.userService.register(this.user);
        this.userService.register(this.user)
            .subscribe(
                () => {
                    alert("Your account was successfully created.");
                    this.toggleDisplay();
                },
                () => alert("Unfortunately we were unable to create your account.")
            );
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }
}