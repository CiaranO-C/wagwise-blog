import React from "react";
import { AuthContext } from '../../src/app/providers/AuthProvider';


function MockAuthProvider({ children, value }) {
  const mockValue = { user: value || null, setUser: vi.fn() };

  return (
    <AuthContext.Provider value={mockValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default MockAuthProvider;
