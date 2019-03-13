describe('Writing a spec', () => {
    it('is easy when you know how!', () => {
        //Given - Arrange
        const a = 10, b = 20;

        //When - Act
        const answer = a + b;

        //Then - Assert
        expect(answer).toBe(30);
    });
});