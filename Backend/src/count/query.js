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

const getJan = `WITH RECURSIVE date_range AS (
                        SELECT '2024-01-01' AS date
                        UNION ALL
                        SELECT DATE_ADD(date, INTERVAL 1 DAY)
                        FROM date_range
                        WHERE date < LAST_DAY('2024-1-01')
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

const getFeb = `WITH RECURSIVE date_range AS (
                        SELECT '2024-02-01' AS date
                        UNION ALL
                        SELECT DATE_ADD(date, INTERVAL 1 DAY)
                        FROM date_range
                        WHERE date < LAST_DAY('2024-2-01')
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

const getMarc = `WITH RECURSIVE date_range AS (
                        SELECT '2024-03-01' AS date
                        UNION ALL
                        SELECT DATE_ADD(date, INTERVAL 1 DAY)
                        FROM date_range
                        WHERE date < LAST_DAY('2024-3-01')
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

const getApr = `WITH RECURSIVE date_range AS (
                        SELECT '2024-04-01' AS date
                        UNION ALL
                        SELECT DATE_ADD(date, INTERVAL 1 DAY)
                        FROM date_range
                        WHERE date < LAST_DAY('2024-4-01')
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

const getMay = `WITH RECURSIVE date_range AS (
                        SELECT '2024-05-01' AS date
                        UNION ALL
                        SELECT DATE_ADD(date, INTERVAL 1 DAY)
                        FROM date_range
                        WHERE date < LAST_DAY('2024-5-01')
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

const getJun = `WITH RECURSIVE date_range AS (
                        SELECT '2024-06-01' AS date
                        UNION ALL
                        SELECT DATE_ADD(date, INTERVAL 1 DAY)
                        FROM date_range
                        WHERE date < LAST_DAY('2024-6-01')
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

const getJul = `WITH RECURSIVE date_range AS (
                        SELECT '2024-07-01' AS date
                        UNION ALL
                        SELECT DATE_ADD(date, INTERVAL 1 DAY)
                        FROM date_range
                        WHERE date < LAST_DAY('2024-7-01')
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

const getAug = `WITH RECURSIVE date_range AS (
                        SELECT '2024-08-01' AS date
                        UNION ALL
                        SELECT DATE_ADD(date, INTERVAL 1 DAY)
                        FROM date_range
                        WHERE date < LAST_DAY('2024-8-01')
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

const getSep = `WITH RECURSIVE date_range AS (
                        SELECT '2024-09-01' AS date
                        UNION ALL
                        SELECT DATE_ADD(date, INTERVAL 1 DAY)
                        FROM date_range
                        WHERE date < LAST_DAY('2024-9-01')
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

const getOct = `WITH RECURSIVE date_range AS (
                        SELECT '2024-10-01' AS date
                        UNION ALL
                        SELECT DATE_ADD(date, INTERVAL 1 DAY)
                        FROM date_range
                        WHERE date < LAST_DAY('2024-10-01')
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

const getNov = `WITH RECURSIVE date_range AS (
                        SELECT '2024-11-01' AS date
                        UNION ALL
                        SELECT DATE_ADD(date, INTERVAL 1 DAY)
                        FROM date_range
                        WHERE date < LAST_DAY('2024-11-01')
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

const getDes = `WITH RECURSIVE date_range AS (
                        SELECT '2024-12-01' AS date
                        UNION ALL
                        SELECT DATE_ADD(date, INTERVAL 1 DAY)
                        FROM date_range
                        WHERE date < LAST_DAY('2024-12-01')
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

module.exports = {
    getCount,
    getYear,
    getJan,
    getFeb,
    getMarc,
    getApr,
    getMay,
    getJun,
    getJul,
    getAug,
    getSep,
    getOct,
    getNov,
    getDes,
};