package com.example.dddd;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class InputPageController {

    @RequestMapping(value = "/input")
    public String inputPage() {
        return "input";
    }

    @RequestMapping(value = "/")
    public String indexPage() {
        return "index";
    }
}
