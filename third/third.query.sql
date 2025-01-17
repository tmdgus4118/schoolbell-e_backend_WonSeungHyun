SELECT 
  ar.request_id, 
  ar.title, 
  ar.status AS request_status, 
  aps.step_order, 
  aps.status AS approval_status, 
  u.name AS approver_name
FROM approval_requests ar
JOIN approval_steps aps ON ar.request_id = aps.request_id
JOIN users u ON aps.approver_id = u.user_id
WHERE aps.approver_id = :user_id
AND aps.status = 'pending'
ORDER BY ar.created_at ASC;
