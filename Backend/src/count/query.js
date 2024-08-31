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
                        month_number AS month_num
                    FROM (
                        SELECT 'January' AS month_number
                        UNION ALL SELECT 'February'
                        UNION ALL SELECT 'March'
                        UNION ALL SELECT 'April'
                        UNION ALL SELECT 'May'
                        UNION ALL SELECT 'June'
                        UNION ALL SELECT 'July'
                        UNION ALL SELECT 'August'
                        UNION ALL SELECT 'Septemer'
                        UNION ALL SELECT 'October'
                        UNION ALL SELECT 'November'
                        UNION ALL SELECT 'Desember'
                    ) AS numbers
                )
                -- Main query to join with actual data
                SELECT
                    months.month_num AS month,
                    COALESCE(COUNT(t.created_at), 0) AS total_transactions
                FROM months
                LEFT JOIN transaksi t 
                    ON DATE_FORMAT(t.created_at, '%Y-%m') = months.month
                    AND t.created_at BETWEEN '2024-01-01' AND '2024-12-31'
                GROUP BY months.month_num
                ORDER BY months.month_num;`;

module.exports = {
    getCount,
    getYear,
};