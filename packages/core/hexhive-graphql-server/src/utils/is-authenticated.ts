import { verify } from "jsonwebtoken";
import { definePermissions } from "./define-permissions";

export const isAuthenticated = (keys: any[]) => (req: any, res: any, next: any) => {
    const hiveJwt = req.headers["x-hive-jwt"]?.toString();

    const gatewayUrl = req.headers['x-hive-gateway']?.toString();

    if (hiveJwt) {
        const verified = verify(
            hiveJwt,
            keys?.[0] || '',
            { algorithms: ["RS256"] }
        );

        (req as any).token = hiveJwt;

        (req as any).gatewayUrl = gatewayUrl;

        (req as any).jwt = {
            ...(verified as any || {}),
            id: (verified as any)?.sub || (verified as any)?.id,
            acl: definePermissions(verified as any)
        };

        next();
    } else {
        res.send({ error: "No JWT" });
    }
}