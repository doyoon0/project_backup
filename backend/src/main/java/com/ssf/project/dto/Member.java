package com.ssf.project.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Member {

    @JsonProperty("id")
    private String email;
    private String username;

    @JsonProperty("pwd")
    private String userpwd;
    private String banned;
    private String signout;
    private String signin;
    private String snsprov;
    private String snsid;
    private String referralId;
}