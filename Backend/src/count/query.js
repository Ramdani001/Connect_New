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
                        date
                    FROM (
                        SELECT 'January' AS date, '01' AS month_number UNION ALL
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
                    months.date AS date,
                    months.month_num AS month_num,
                    COALESCE(COUNT(t.created_at), 0) AS count
                FROM months
                LEFT JOIN transaksi t 
                    ON DATE_FORMAT(t.created_at, '%Y-%m') = months.month
                    AND t.created_at BETWEEN '2024-01-01' AND '2024-12-31'
                GROUP BY months.date, months.month_num
                ORDER BY months.month_num;
`;

const getFilterMonth = `WITH RECURSIVE date_range AS (
                        SELECT ? AS date
                        UNION ALL
                        SELECT DATE_ADD(date, INTERVAL 1 DAY)
                        FROM date_range
                        WHERE date < LAST_DAY(?)
                    )
                    -- Count occurrences per date
                    SELECT 
                        date_range.date,
                        COUNT(transaksi.created_at) AS count
                    FROM date_range
                    LEFT JOIN transaksi 
                        ON DATE(transaksi.created_at) = date_range.date
                    GROUP BY date_range.date
                    ORDER BY date_range.date;`;

const getFilterDays = `WITH RECURSIVE hours_range AS (
                            SELECT 1 AS hours
                            UNION ALL
                            SELECT hours + 1
                            FROM hours_range
                            WHERE hours < 24
                        )
                        -- Count occurrences per hour
                        SELECT 
                            hours_range.hours,
                            COALESCE(COUNT(transaksi.created_at), 0) AS count
                        FROM hours_range
                        LEFT JOIN transaksi 
                            ON HOUR(transaksi.created_at) = hours_range.hours
                            AND DATE(transaksi.created_at) = ?
                        GROUP BY hours_range.hours
                        ORDER BY hours_range.hours;`;

module.exports = {
    getCount,
    getYear,
    getFilterMonth,
    getFilterDays,
};