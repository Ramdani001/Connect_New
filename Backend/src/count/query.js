const getCount = `SELECT
                        COUNT(CASE WHEN STATUS = 1 THEN 1 END) AS paid,
                        COUNT(CASE WHEN STATUS = 2 THEN 1 END) AS confirmation,
                        COUNT(CASE WHEN STATUS = 3 THEN 1 END) AS unpaid,
                        (SELECT COUNT(*) FROM users) AS users,
                    (SELECT COUNT(*) FROM product) AS product
                    FROM transaksi;`;

const getYear = `WITH months AS (
                    SELECT 
                        DATE_FORMAT(CONCAT('2024-', LPAD(month_number, 2, '0'), '-01'), '%Y-%m') AS month,
                        month_number AS month_num,
                        years
                    FROM (
                        SELECT 'January' AS years, '01' AS month_number UNION ALL
                        SELECT 'February', '02' UNION ALL
                        SELECT 'March', '03' UNION ALL
                        SELECT 'April', '04' UNION ALL
                        SELECT 'May', '05' UNION ALL
                        SELECT 'June', '06' UNION ALL
                        SELECT 'July', '07' UNION ALL
                        SELECT 'August', '08' UNION ALL
                        SELECT 'September', '09' UNION ALL
                        SELECT 'October', '10' UNION ALL
                        SELECT 'November', '11' UNION ALL
                        SELECT 'December', '12'
                    ) AS numbers
                )
                -- Main query to join with actual data
                SELECT
                    months.years AS years,
                    months.month_num AS month_num,
                    COALESCE(COUNT(t.created_at), 0) AS count
                FROM months
                LEFT JOIN transaksi t 
                    ON DATE_FORMAT(t.created_at, '%Y-%m') = months.month
                    AND t.created_at BETWEEN '2024-01-01' AND '2024-12-31'
                GROUP BY months.years, months.month_num
                ORDER BY months.month_num;
`;

module.exports = {
    getCount,
    getYear,
};