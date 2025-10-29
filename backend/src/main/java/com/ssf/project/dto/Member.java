package com.ssf.project.dto;

import lombok.Data;
import jakarta.persistence.Column;

@Data
public class Member {
    private String userEmail;
    private String userUsername;
    private String userUserpwd;
    private String userBanned;
    private String userSignout;
    private String userSignin;
    private String userSnsprov;
    private String userSnsid;
    private String userReferralId;
}