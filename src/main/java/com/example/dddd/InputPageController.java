package com.example.dddd;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;

@Controller
public class InputPageController {

    @RequestMapping(value = "/")
    private String indexPage() {
        return "index";
    }

    @RequestMapping(value = "/input")
    private String toInputPage() {
        return "input";
    }

    @RequestMapping(value = "/sendSet")
    private String toSendSetPage(@RequestParam("name") String name,@RequestParam("kana") String kana, Model model) {
        String birthday = "9999/99/99";
        String infoFlag = "未";
        model.addAttribute("name", name);
        model.addAttribute("kana", kana);
        model.addAttribute("birthday", birthday);
        model.addAttribute("infoFlag", infoFlag);
        return "sendSet";
    }
}
