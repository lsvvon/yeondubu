package yeon.dubu.user.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import yeon.dubu.user.dto.response.UserResponseDto;
import yeon.dubu.user.service.UserService;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;

    /**
     * 사용자 정보 조회
     * @param userId
     * @return
     */
    @GetMapping
    public ResponseEntity getId(@AuthenticationPrincipal Long userId) {
        log.debug("retrieve() userId: {}", userId);
        UserResponseDto userResponseDto = userService.retrieveMember(userId);

        return ResponseEntity.ok(userResponseDto);
    }


}
