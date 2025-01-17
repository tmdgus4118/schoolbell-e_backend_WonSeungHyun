import pool from './config';

interface Approval {
  request_id: number;
  title: string;
  request_status: string;
  step_order: number;
  approval_status: string;
  approver_name: string;
}

async function getPendingApprovals(userId: number): Promise<void> {
  const query = `
    SELECT ar.request_id, ar.title, ar.status AS request_status, 
           aps.step_order, aps.status AS approval_status, u.name AS approver_name
    FROM approval_requests ar
    JOIN approval_steps aps ON ar.request_id = aps.request_id
    JOIN users u ON aps.approver_id = u.user_id
    WHERE aps.approver_id = $1 AND aps.status = 'pending'
    ORDER BY ar.created_at ASC;
  `;

  try {
    const { rows }: { rows: Approval[] } = await pool.query(query, [userId]);
    console.log('Pending Approvals:', rows);
  } catch (err) {
    console.error('Error fetching approvals:', err);
  }
}

// 첫번째의 승인 대기 요청 조회
getPendingApprovals(1);
