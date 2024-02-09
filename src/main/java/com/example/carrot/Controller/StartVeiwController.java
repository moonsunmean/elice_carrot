package com.example.carrot.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StartVeiwController {

    @GetMapping("/locationCompany")
    public String getstartForm(){
        return "locationCo";
    }
    @GetMapping("/secondhand")
    public String getsecondhandForm(){
        return "secondhand";
    }
}
