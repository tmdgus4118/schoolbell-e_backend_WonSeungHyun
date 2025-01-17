-- 사용자 추가
INSERT INTO users (name, email) VALUES ('첫번째', 'first@example.com');
INSERT INTO users (name, email) VALUES ('두번째', 'second@example.com');

-- 결재 요청 추가
INSERT INTO approval_requests (title, description, created_by) 
VALUES ('예산 승인 요청', '2024년 프로젝트 예산 승인 요청', 1);

-- 결재 단계 추가 (첫번째가 1차 승인, 두번째가 2차 승인)
INSERT INTO approval_steps (request_id, approver_id, step_order) VALUES (1, 1, 1);
INSERT INTO approval_steps (request_id, approver_id, step_order) VALUES (1, 2, 2);
