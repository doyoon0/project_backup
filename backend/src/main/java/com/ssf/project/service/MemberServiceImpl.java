package com.ssf.project.service;

import com.ssf.project.dto.Member;
import com.ssf.project.repositoty.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service // memberServiceImpl
@Transactional  // DB가 auto-commit 모드이면 생략가능
public class MemberServiceImpl implements MemberService{    // MemberService memberService

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public MemberServiceImpl(MemberRepository memberRepository, PasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public int signup (Member member){
        // 패스워드 인코딩
        String encodePwd = passwordEncoder.encode(member.getUserpwd()); // UUID 타입으로 생성됨
        member.setUserpwd(encodePwd);
        return memberRepository.save(member);
    };

}
