package com.example.carrot.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StartVeiwController {

    @GetMapping("")
    public String getstartForm(){
        return "start";
    }

    @GetMapping("/locationCompany")
    public String getlocationForm(){
        return "locationCo";
    }

    @GetMapping("/secondhand")
    public String getsecondhandForm(){
        return "secondhand";
    }

    @GetMapping("/jobs")
    public String getjobsForm(){
        return "jobs";
    }


    @GetMapping("/realty")
    public String getrealtyForm(){return "realty";}

    @GetMapping("/car")
    public String getcarForm(){
        return "car";
    }
    @GetMapping("/qna")
    public String getqnaForm(){ return "qna";}
}
