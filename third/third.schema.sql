-- 사용자 테이블
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);

-- 결재 요청 테이블
CREATE TABLE approval_requests (
  request_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(20) CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
  created_by INT REFERENCES users(user_id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- 결재 단계 테이블
CREATE TABLE approval_steps (
  step_id SERIAL PRIMARY KEY,
  request_id INT REFERENCES approval_requests(request_id) ON DELETE CASCADE,
  approver_id INT REFERENCES users(user_id),
  step_order INT NOT NULL,
  status VARCHAR(20) CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
  updated_at TIMESTAMP DEFAULT NULL
);
